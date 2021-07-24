import {FUND_A_FARM} from '@store/actions/transactions';

const initialState = {
  balance: 0,
  investments: {
    onGoing: [],
    paidOut: [],
  },
  history: [],
};

export default function transactionsReducer(state = initialState, action) {
  switch (action.type) {
    case FUND_A_FARM:
      const {farmId, startDate} = action;
      const newInvestment = {farmId, startDate};
      return {
        ...state,
        investments: {
          ...state.investments,
          onGoing: state.investments.onGoing.concat(newInvestment),
        },
      };
    default:
      return state;
  }
}
