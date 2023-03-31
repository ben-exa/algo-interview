_You are working with the owner of a brand new assisted living community._

There are `n` residents standing in a line waiting to enter the community for the first time. Residents have given you preferences for each room, and unfortunately you could not meet all of their preferences. Each resident is assigned an unhappiness score given in the integer array `unhappinessScores`. This score represents how unhappy the resident is with their assigned room. The owner has decided that he wants to give money to the residents in order to help alleviate their unhappiness.

You are assigned to help. You will be giving money to these residents subjected to the following requirements:

- Each resident must have at least one $1
- Residents that are more unhappy get more money than their neighbors or their unhappiness does not go away.

Return _the minimum number of dollars you need to have to distribute the money to the residents to alleviate all of their unhappiness_.

**Example 1:**

**Input:** unhappinessScores = [1,0,2]

**Output:** 5

**Explanation:** You can allocate to the first, second and third resident with 2, 1, 2 dollars respectively.

**Example 2:**

**Input:** unhappinessScores = [1,2,2]

**Output:** 4

**Explanation:** You can allocate to the first, second and third resident with 1, 2, 1 dollars respectively.
The third resident gets 1 dollar because it satisfies the above two conditions.

**Constraints:**

- `n == unhappinessScores.length`
- `1 <= n <= 2 * 104`
- `0 <= ratings[i] <= 10`
