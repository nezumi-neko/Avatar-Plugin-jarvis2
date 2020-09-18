taskkill /f /im Avatar.exe
taskkill /f /im AvatarWebAPIClient.exe
@start timeout /t 6
@start C:\Avatar\Avatar-Serveur
@start timeout /t 15
@start C:\Avatar\Avatar-WebAPIClient
