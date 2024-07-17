const apiKey = "adee5297466d50327bda363905e671ba7f8ae629bf25f57f795a6eff49d9aad3";
const validUrlPrefix = "https://keynadeska.daily.co/";

export const createCall = async () => {
  const response = await fetch("https://api.daily.co/v1/rooms", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      properties: {
        enable_chat: true,
        start_video_off: true,
        start_audio_off: true,
      }
    }),
  });
  const room = await response.json();
  return room.url;
};

export const joinCall = (callUrl) => {
  if (!callUrl.startsWith(validUrlPrefix)) {
    return false;
  }

  try {
    new URL(callUrl);
    window.location.href = callUrl;
    return true;
  } catch (_) {
    return false;
  }
};
