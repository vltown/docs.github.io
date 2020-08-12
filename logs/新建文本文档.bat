for /f "delims=" %%a in ('dir/b "index\*.log"') do (
   ren "index\%%~nxa" "index%%~nxa"
)
pause