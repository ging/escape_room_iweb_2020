export const TURN_OFF_COMPONENT = 'TURN_OFF_COMPONENT';

 
export function turnOffComponent(index) {
  return { type: TURN_OFF_COMPONENT, payload: { index } };
}
 