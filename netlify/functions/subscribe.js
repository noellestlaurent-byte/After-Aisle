exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { email } = JSON.parse(event.body);

  const response = await fetch(
    'https://api.beehiiv.com/v2/publications/pub_428fa035-6e39-4e4b-b51f-5aa69425dbf8/subscriptions',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer WXJyoo6ufB16YX22camkRvMC6T3zjDRUGiEz8RKHwojtRsfsA7ppncb1fm9eUlTu'
      },
      body: JSON.stringify({ email, reactivate_existing: true, send_welcome_email: false })
    }
  );

  return {
    statusCode: response.ok ? 200 : 500,
    body: JSON.stringify({ ok: response.ok })
  };
};
