Get-ChildItem -Path "C:\" |
    ForEach-Object {
        $binaryReader = New-Object System.IO.BinaryReader([System.IO.File]::Open("C:\$_", [System.IO.FileMode]::Open, [System.IO.FileAccess]::Read, [System.IO.FileShare]::ReadWrite))
        $header = $binaryReader.ReadBytes(4)
        Write-Host "$_ : $header"
    }
