// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const handler = async (event) => {
  const { lat, long } = event.queryStringParameters;

  const apiKey =
    "patvU0pWinUI9upgH.c376b35680439358130c45d6db19525fbd87aefe238310fb292b3502312be0e7";
  const url = `https://api.airtable.com/v0/appDPWYku93IboXID/tblIT67fkOEOObBLn?access_key=${apiKey}`;
  try {
    const subject = event.queryStringParameters.name || "World";
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
