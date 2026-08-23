@echo off
setlocal
cd /d "%~dp0"

echo.
echo ========================================
echo BaiheAI Product Library Sync
echo ========================================
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo ERROR: Node.js was not found.
  echo Please install Node.js or check PATH.
  goto :error
)

if not exist "scripts\sync-products.mjs" (
  echo ERROR: scripts\sync-products.mjs was not found.
  goto :error
)

if not exist "product-files" (
  echo ERROR: product-files folder was not found.
  goto :error
)

echo [1/2] Syncing product files...
node "scripts\sync-products.mjs"
if errorlevel 1 goto :error

echo.
echo [2/2] Running website build check...
call npm.cmd run build
if errorlevel 1 goto :error

echo.
echo ========================================
echo SUCCESS
echo Product library synchronized.
echo Website build completed successfully.
echo ========================================
echo.
pause
exit /b 0

:error
echo.
echo ========================================
echo FAILED
echo Please review the error message above.
echo ========================================
echo.
pause
exit /b 1
