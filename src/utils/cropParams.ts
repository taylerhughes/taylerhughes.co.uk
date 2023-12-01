const cropParams = (
  imgUrl: string,
  w: number,
  h: number,
  dpi = 2,
  params?: string,
) => {
  const base = `${imgUrl}?w=${w * dpi}&h=${h * dpi}&fit=crop&auto=format`;
  if (params) {
    return `${base}&${params}`;
  }
  return base;
};

export default cropParams;
