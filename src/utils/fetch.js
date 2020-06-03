import unfetch from 'isomorphic-unfetch';

export default async function (...args) {
  const res = await unfetch(...args);
  return res.json();
}
