Write-Host "Forza Horizon 3 affinity and priority will now be changed. PowerShell will exit afterwards."
$Process = Get-Process forza_x64_release_final
$Process.ProcessorAffinity=254
$Process.PriorityClass=[System.Diagnostics.ProcessPriorityClass]::IDLE