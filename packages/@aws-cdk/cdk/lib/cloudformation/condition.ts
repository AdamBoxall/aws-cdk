import { FnCondition } from './fn';
import { Referenceable } from './stack';

export interface ConditionProps {
  expression?: FnCondition;
}

/**
 * Represents a CloudFormation condition, for resources which must be conditionally created and
 * the determination must be made at deploy time.
 */
export class Condition extends Referenceable {
  /**
   * The condition statement.
   */
  public expression?: FnCondition;

  /**
   * Build a new condition. The condition must be constructed with a condition token,
   * that the condition is based on.
   */
  constructor(name: string, props?: ConditionProps) {
    super(name);
    this.expression = props && props.expression;
  }

  public toCloudFormation(): object {
    return {
      Conditions: {
        [this.logicalId]: this.expression
      }
    };
  }
}
