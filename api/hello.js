export default function handler(req, res) {
  const { name = "there" } = req.query;
  res
    .status(200)
    .json({ message: `Hi ${name}, thanks for visiting my profile!` });
}
