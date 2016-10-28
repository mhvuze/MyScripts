Write-Host "Skyrim SE mod installation will now be swapped.`n"

# set variables
$gameInstall="E:\SteamLibrary\SteamApps\common\Skyrim Special Edition"
$scriptStorage="C:\Users\corne\Documents\SkyrimSE_mods\"

# simplified check if scripts are installed
# all move-item actions are silenced. if a file isn't found, you won't get any error messages and the script will continue.
$stateFile=$gameInstall+"is-modded.txt"

If (Test-Path $stateFile)
    {
        # move scripts out of install folder
        Write-Host "CHECK: Mods are installed." -ForegroundColor "Red"
        Write-Host "Moving mods to storage folder."

        # Basics
        Move-Item ($gameInstall+"is-modded.txt") ($scriptStorage+"is-modded.txt") -ea 0

        # Achievements Mods Enabler
        # http://www.nexusmods.com/skyrimspecialedition/mods/245/?
        Move-Item ($gameInstall+"AchievementsModsEnabler.dll") ($scriptStorage+"AchievementsModsEnabler.dll") -ea 0
        Move-Item ($gameInstall+"X3DAudio1_7.dll") ($scriptStorage+"X3DAudio1_7.dll") -ea 0
        Move-Item ($gameInstall+"DllLoader.txt") ($scriptStorage+"DllLoader.txt") -ea 0
        Move-Item ($gameInstall+"AchievementsModsEnabler.dll_Exports.txt") ($scriptStorage+"AchievementsModsEnabler.dll_Exports.txt") -ea 0
        Move-Item ($gameInstall+"AchievementsModsEnabler.log") ($scriptStorage+"AchievementsModsEnabler.log") -ea 0
        

        # end
        Write-Host "`nINFO: Mods are now uninstalled.`n" -ForegroundColor "Green"
    }
Else
    {
        # move scripts in to install folder
        Write-Host "CHECK: Mods are uninstalled." -ForegroundColor "Green"
        Write-Host "Moving mods to installation folder."

        # Basics
        Move-Item ($scriptStorage+"is-modded.txt") ($gameInstall+"is-modded.txt") -ea 0

        # Achievements Mods Enabler
        # http://www.nexusmods.com/skyrimspecialedition/mods/245/?
        Move-Item ($scriptStorage+"AchievementsModsEnabler.dll") ($gameInstall+"AchievementsModsEnabler.dll") -ea 0
        Move-Item ($scriptStorage+"X3DAudio1_7.dll") ($gameInstall+"X3DAudio1_7.dll") -ea 0
        Move-Item ($scriptStorage+"DllLoader.txt") ($gameInstall+"DllLoader.txt") -ea 0
        Move-Item ($scriptStorage+"AchievementsModsEnabler.dll_Exports.txt") ($gameInstall+"AchievementsModsEnabler.dll_Exports.txt") -ea 0
        Move-Item ($scriptStorage+"AchievementsModsEnabler.log") ($gameInstall+"AchievementsModsEnabler.log") -ea 0

        # end
        Write-Host "`nINFO: Mods are now installed.`n" -ForegroundColor "Red"
    }

Read-Host -Prompt "Press any key to exit"