const fs = require("fs");
const path = require("path");
const ini = require("ini");
const DiscordRPC = require("discord-rpc");

const exeDir = path.dirname(process.execPath);
const configPath = path.join(exeDir, "config.ini");
const config = ini.parse(fs.readFileSync(configPath, "utf-8"));

const clientId = config.Client.ClientId;

const RPC = new DiscordRPC.Client({ transport: "ipc" });

DiscordRPC.register(clientId);

RPC.login({ clientId }).catch(console.error);

RPC.on("ready", () => {
  console.log("RPC connected!");
  setActivity(config);
  setInterval(() => {
    setActivity(config);
  }, 15 * 1000);
});

RPC.on("error", console.error);

async function setActivity(config) {
  const activity = {
    details: config.State.Details || undefined,
    state: config.State.State || undefined,
    startTimestamp: config.State.StartTimestamp
      ? parseInt(config.State.StartTimestamp)
      : undefined,
    endTimestamp: config.State.EndTimestamp
      ? parseInt(config.State.EndTimestamp)
      : undefined,
    largeImageKey: config.Images.LargeImageKey || undefined,
    largeImageText: config.Images.LargeImageText || undefined,
    smallImageKey: config.Images.SmallImageKey || undefined,
    smallImageText: config.Images.SmallImageText || undefined,
    instance: false
  };

  if (
    config.Buttons &&
    ((config.Buttons.Button1Label && config.Buttons.Button1URL) ||
      (config.Buttons.Button2Label && config.Buttons.Button2URL))
  ) {
    activity.buttons = [];

    if (config.Buttons.Button1Label && config.Buttons.Button1URL) {
      activity.buttons.push({
        label: config.Buttons.Button1Label,
        url: config.Buttons.Button1URL
      });
    }

    if (config.Buttons.Button2Label && config.Buttons.Button2URL) {
      activity.buttons.push({
        label: config.Buttons.Button2Label,
        url: config.Buttons.Button2URL
      });
    }
  }

  RPC.setActivity(activity);
}
