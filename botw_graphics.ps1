Write-Output "Cleaning up before update"
Get-ChildItem -Path $PSScriptRoot -Directory -Filter cemu_graphic_packs-master |
    ForEach-Object {
        Remove-Item -Recurse -Force $_
    }

Get-ChildItem -Path $PSScriptRoot -Directory -Filter BreathOfTheWild_* |
    ForEach-Object {
        Remove-Item -Recurse -Force $_
    }

$url = "https://github.com/slashiee/cemu_graphic_packs/archive/master.zip"
$output = "$PSScriptRoot\master.zip"
$start_time = Get-Date

$quality = "2160p"
$enthusiast = "2880p"

Invoke-WebRequest -Uri $url -OutFile $output
Write-Output "Download finished in: $((Get-Date).Subtract($start_time).Seconds) second(s)"

$start_time = Get-Date
Expand-Archive $output -DestinationPath $PSScriptRoot
Write-Output "Unzipping finished in: $((Get-Date).Subtract($start_time).Seconds) second(s)"

mkdir $PSScriptRoot\BreathOfTheWild_$quality
mkdir $PSScriptRoot\BreathOfTheWild_$enthusiast
Get-ChildItem $PSScriptRoot\cemu_graphic_packs-master\Quality\BreathOfTheWild_$quality -Recurse | ForEach-Object { Move-Item $_.FullName $PSScriptRoot\BreathOfTheWild_$quality }
Get-ChildItem $PSScriptRoot\cemu_graphic_packs-master\Enthusiast\BreathOfTheWild_$enthusiast -Recurse | ForEach-Object { Move-Item $_.FullName $PSScriptRoot\BreathOfTheWild_$enthusiast }
Get-ChildItem -Path $PSScriptRoot\cemu_graphic_packs-master\Enhancement -Directory -Recurse -Filter BreathOfTheWild_* |
    ForEach-Object {
        $dir = $_
        mkdir $PSScriptRoot\$dir
        Get-ChildItem $PSScriptRoot\cemu_graphic_packs-master\Enhancement\$dir -Recurse | ForEach-Object { Move-Item $_.FullName $PSScriptRoot\$dir }
    }

Remove-Item -Recurse -Force $PSScriptRoot\cemu_graphic_packs-master
Remove-Item -Force $output
