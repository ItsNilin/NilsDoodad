# NilsDoodad (Custom Discord Rich Presence)
Just a small simple program to use Discord Rich Presence by editing a config file!

**Instructions**
- Register yourself an application with discord
  - Head to the developer portal: https://discordapp.com/developers/applications/me
  - Select 'New Application' at the top right **The name of the app will be the main name for the rich presence**
  - Head to OAuth2 and copy your CLIENT ID
- Download the latest version of the doodad from this github: https://github.com/ItsNilin/NilsDoodad/releases
- Edit the config file, pasting in your CLIENT ID, and filling out the fields you desire.
- Run the [Doodad's Executable](https://github.com/ItsNilin/NilsDoodad/releases) You should see a terminal open up.
- Congratulations, discord should now be showing your custom rich presence!

**Timestamps**
Start and end timestamps are in epoch/unix time, you can find your desired values [here](https://www.epochconverter.com/)
For "Time Elapsed" set __only__ the StartTimestamp
For "Remaining Time" set both.
*Note: Discord only shows hours/minutes/seconds, it does not go above 24 hours*

**Building**
If you would like to build this from source, it should be straight forward however I will fill this section out soon.

**Malware??!?!?**
Windows defender will flag this as a false positive, that is because the exe is accessing a file on your computer (config.ini)
the source code is here to confirm for yourself, however please do check it yourself for verification and/or build it from source
if you are concerned. Always stay safe and be cautious when downloading off the internet!


