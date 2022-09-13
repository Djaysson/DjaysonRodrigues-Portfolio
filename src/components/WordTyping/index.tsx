import useTyping from 'react-typing-hook';

export function WordTyping() {
  const ref = useTyping({
    steps: [' sou  Frontend developer.', 3000, ' sou Freelancer.', 3000],
    loop: Infinity,
    speed: 60
  });

  return <span ref={ref}></span>;
}
