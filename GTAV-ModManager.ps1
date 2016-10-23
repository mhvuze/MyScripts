Write-Host "GTAV script installation will now be swapped.`n"

# set variables
$gameInstall="D:\Steam\steamapps\common\Grand Theft Auto V\"
$scriptStorage="C:\Users\corne\Documents\GTAV_mods\"

# simplified check if scripts are installed
# all move-item actions are silenced. if a file isn't found, you won't get any error messages and the script will continue.
$stateFile=$gameInstall+"scripted.txt"

If (Test-Path $stateFile)
    {
        # move scripts out of install folder
        Write-Host "CHECK: Scripts are installed." -ForegroundColor "Red"
        Write-Host "Moving scripts to storage folder."

        # Basics
        Move-Item ($gameInstall+"ScriptHookV.dll") ($scriptStorage+"ScriptHookV.dll") -ea 0
        Move-Item ($gameInstall+"dinput8.dll") ($scriptStorage+"dinput8.dll") -ea 0
        Move-Item ($gameInstall+"scripted.txt") ($scriptStorage+"scripted.txt") -ea 0

        # Trainer V
        Move-Item ($gameInstall+"TrainerV.asi") ($scriptStorage+"TrainerV.asi") -ea 0
        Move-Item ($gameInstall+"trainerv.ini") ($scriptStorage+"trainerv.ini") -ea 0

        # end
        Write-Host "`nINFO: Scripts are now uninstalled.`nReady to play GTA: Online.`n" -ForegroundColor "Green"
    }
Else
    {
        # move scripts in to install folder
        Write-Host "CHECK: Scripts are uninstalled." -ForegroundColor "Green"
        Write-Host "Moving scripts to installation folder."

        # Basics
        Move-Item ($scriptStorage+"ScriptHookV.dll") ($gameInstall+"ScriptHookV.dll") -ea 0
        Move-Item ($scriptStorage+"dinput8.dll") ($gameInstall+"dinput8.dll") -ea 0
        Move-Item ($scriptStorage+"scripted.txt") ($gameInstall+"scripted.txt") -ea 0

        # Trainer V
        Move-Item ($scriptStorage+"TrainerV.asi") ($gameInstall+"TrainerV.asi") -ea 0
        Move-Item ($scriptStorage+"trainerv.ini") ($gameInstall+"trainerv.ini") -ea 0

        # end
        Write-Host "`nINFO: Scripts are now installed.`nDo not play GTA:Online.`n" -ForegroundColor "Red"
    }

Read-Host -Prompt "Press any key to exit"