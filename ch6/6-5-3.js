// aCustomer.address.state 가 아닌 필요한 정보만 받아오기
export function inNewEngland(state) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(state);
}
