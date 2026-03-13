# NearHelper Database Troubleshooting Guide

## Issue: Not able to fetch results from database

### Root Causes:
1. MongoDB is not running
2. Backend server is not running
3. No data in the database
4. Geospatial index not created

### Solutions:

## Step 1: Start MongoDB
```bash
# Make sure MongoDB is installed and running
mongod
```

## Step 2: Install Dependencies
```bash
cd c:\NearHelper\workfinder-dashboard\backend
npm install
```

## Step 3: Seed the Database with Sample Data
```bash
cd c:\NearHelper\workfinder-dashboard\backend
node seed.js
```

## Step 4: Start the Backend Server
```bash
cd c:\NearHelper\workfinder-dashboard\backend
npm start
```
Server should start on port 3004.

## Step 5: Test the Application
Open `c:\NearHelper\register\search.html` in your browser.

### Expected Behavior:
- Workers should load automatically
- Search filters should work
- Error alerts will show if server is not running

### Verify Database:
```bash
# Connect to MongoDB
mongosh

# Switch to database
use nearhelper

# Check workers
db.workers.find()

# Verify geospatial index
db.workers.getIndexes()
```

### Common Errors:

**Error: "Cannot connect to server"**
- Backend server is not running on port 3004
- Run: `cd c:\NearHelper\workfinder-dashboard\backend && npm start`

**Error: "No workers found"**
- Database is empty
- Run: `cd c:\NearHelper\workfinder-dashboard\backend && node seed.js`

**Error: "MongoDB connection error"**
- MongoDB is not running
- Start MongoDB service or run `mongod`

**Error: "$near requires a geospatial index"**
- Index not created automatically
- Run in mongosh: `db.workers.createIndex({ location: "2dsphere" })`
