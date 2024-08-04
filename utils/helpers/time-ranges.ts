export default function parseTimeRanges(ranges: {
  start: (index: number) => number;
  end: (index: number) => number;
  length: number;
}) {
  const result: { start: number; end: number }[] = [];

  for (let i = 0; i < ranges.length; i++) {
    result.push({
      start: ranges.start(i),
      end: ranges.end(i),
    });
  }

  return result;
}

export const getTime = (time: number) =>
  `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;
