@echo off
echo ========================================
echo NearHelper Database Check
echo ========================================
echo.

echo [1/4] Checking MongoDB connection...
mongosh --eval "db.adminCommand('ping')" --quiet >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] MongoDB is not running!
    echo Please start MongoDB first: mongod
    pause
    exit /b 1
)
echo [OK] MongoDB is running

echo.
echo [2/4] Checking database and workers...
mongosh nearhelper --eval "print('Workers count: ' + db.workers.countDocuments())" --quiet

echo.
echo [3/4] Checking geospatial index...
mongosh nearhelper --eval "db.workers.getIndexes().forEach(i => print(JSON.stringify(i)))" --quiet

echo.
echo [4/4] Next steps:
echo - If workers count is 0, run: cd workfinder-dashboard\backend ^&^& node seed.js
echo - Start backend: cd workfinder-dashboard\backend ^&^& npm start
echo - Open: register\search.html in browser
echo.
pause
