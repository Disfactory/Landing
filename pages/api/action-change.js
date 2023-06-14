export default async function handler(req, res) {
  try {
    const response = await fetch(
      'https://api.disfactory.tw/api/statistics/action_change'
    );
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
