export default function capitalize(string) {
  return (
    string
      // replace _ with spaces
      .replace(/_/g, ' ')
      // insert a space between lower & upper
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      // space before last upper in a sequence followed by lower
      .replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
      // uppercase the first character
      .replace(/^./, str => str.toUpperCase())
  );
}
