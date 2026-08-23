@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo.
echo ========================================
echo BaiheAI 产品库同步 / Product Sync
echo ========================================
echo.
node scripts\sync-products.mjs
if errorlevel 1 goto :error

echo.
echo 正在检查网站编译 / Running build check...
npm.cmd run build
if errorlevel 1 goto :error

echo.
echo ========================================
echo 完成：产品库已同步，网站编译成功。
echo 下一步可以 git add / commit / push。
echo ========================================
echo.
pause
exit /b 0

:error
echo.
echo ========================================
echo 失败：请查看上面的错误信息。
echo ========================================
echo.
pause
exit /b 1
