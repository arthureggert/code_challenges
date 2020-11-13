type State = string | number | symbol
type Transition = string | number | symbol

type StateDefinition<S extends State, T extends Transition> = {
  [StateKey in S]: {
    actions: {
      onEnter: () => void
      onExit: () => void
    }
    transitions: {
      [TransitionKey in T]: {
        target: S
        action: () => void
      }
    }
  }
}

type Definition<S extends State, T extends Transition> = StateDefinition<S, T> & {
  initialState: S
}

type Machine<S extends State, T extends Transition> = {
  state: S
  transition: (currentState: S, stateTransaction: T) => S
}

const createMachine = <S extends State, T extends Transition>(def: Definition<S, T>): Machine<S, T> => {
  const stateMachine: Machine<S, T> = {
    state: def.initialState,
    transition(currentState: S, transition: T) {
      const currentStateDefinition = def[currentState]
      const destinationTransition = currentStateDefinition.transitions[transition]
      if (!destinationTransition) {
        throw new Error(`${transition} is not a valid state transaction`)
      }
      const destinationState = destinationTransition.target
      const destinationStateDefinition = def[destinationState]

      destinationTransition.action()
      currentStateDefinition.actions.onExit()
      destinationStateDefinition.actions.onEnter()

      stateMachine.state = destinationState

      return stateMachine.state
    }
  }
  return stateMachine
}

export { createMachine }
