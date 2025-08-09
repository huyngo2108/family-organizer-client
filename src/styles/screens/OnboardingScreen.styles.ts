import { makeStyles } from '../utils/makeStyles';

export const useOnboardingScreenStyles = makeStyles(() => ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    textAlign: 'center',
    textTransform: 'uppercase',
    textShadowColor: '#00000055',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
}));
