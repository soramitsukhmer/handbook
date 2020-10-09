# Repository Branch Template

## Default branch

The default branch is considered the “base” branch in your repository, against which all pull requests and code commits are automatically made, unless you specify a different branch.

The primary default branch must be: `develop`

## Branch Protection Rules

Define branch protection rules to disable force pushing, prevent branches from being deleted, and optionally require status checks before merging.

### main (previously master)

#### Protect matching branches

- [ ] **Require pull request reviews before merging**

    When enabled, all commits must be made to a non-protected branch and submitted via a pull request with the required number of approving reviews and no changes requested before it can be merged into a branch that matches this rule.

    **Required approving reviews**: 1

    - [ ] **Dismiss stale pull request approvals when new commits are pushed**

        New reviewable commits pushed to a matching branch will dismiss pull request review approvals.

    - [ ] **Require review from Code Owners**

        Require an approved review in pull requests including files with a designated code owner.

    - [ ] **Restrict who can dismiss pull request reviews**

        Specify people or teams allowed to dismiss pull request reviews.

- [ ] **Require status checks to pass before merging**

    Choose which status checks must pass before branches can be merged into a branch that matches this rule. When enabled, commits must first be pushed to another branch, then merged or pushed directly to a branch that matches this rule after status checks have passed.

    - [ ] **Require branches to be up to date before merging**

        This ensures pull requests targeting a matching branch have been tested with the latest code. This setting will not take effect unless at least one status check is enabled (see below).

        Example status checks for repository:
        - Run lint and unit test
        - Build, Tag and Push Image

- [ ] **Require signed commits**

    Commits pushed to matching branches must have verified signatures.

- [ ] **Require linear history**

    Prevent merge commits from being pushed to matching branches.

- [ ] **Include administrators**

    Enforce all configured restrictions above for administrators.

- [ ] Restrict who can push to matching branches

    Specify people, teams or apps allowed to push to matching branches. Required status checks will still prevent these people, teams and apps from merging if the checks fail.

#### Rules applied to everyone including administrators

- [ ] **Allow force pushes**

    Permit force pushes for all users with push access.

- [ ] **Allow deletions**

    Allow users with push access to delete matching branches.
