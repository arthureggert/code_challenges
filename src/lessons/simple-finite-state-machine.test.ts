import { createMachine } from './simple-finite-state-machine'

type State = 'on' | 'off'
type StateTransactions = 'switch'

const offActionOnEnter = jest.fn()
const offActionOnExit = jest.fn()
const onActionOnEnter = jest.fn()
const onActionOnExit = jest.fn()
const offTransitionSwitchAction = jest.fn()
const onTransitionSwitchAction = jest.fn()

const machine = createMachine<State, StateTransactions>({
  initialState: 'off',
  off: {
    actions: {
      onEnter: offActionOnEnter,
      onExit: offActionOnExit
    },
    transitions: {
      switch: {
        target: 'on',
        action: offTransitionSwitchAction
      }
    }
  },
  on: {
    actions: {
      onEnter: onActionOnEnter,
      onExit: onActionOnExit
    },
    transitions: {
      switch: {
        target: 'off',
        action: onTransitionSwitchAction
      }
    }
  }
})

describe('Simple Finite State Machine', () => {
  it('should have the state to be the same passed in the definition', () => {
    expect(machine.state).toBe('off')
  })

  it('should have the state updated immediately', () => {
    machine.transition(machine.state, 'switch')
    expect(machine.state).toBe('on')
    expect(offActionOnExit).toHaveBeenCalled()
    expect(onActionOnEnter).toHaveBeenCalled()
    expect(offTransitionSwitchAction).toBeCalled()
  })

  it('should throw error when transition to with invalid action', () => {
    try {
      // @ts-expect-error check if the transition method name is valid
      machine.transition(machine.state, 'switchz')
      expect(machine.state).toBe('on')
    } catch (e) {
      expect(e.message).toBe('switchz is not a valid state transaction')
    }
  })
})
