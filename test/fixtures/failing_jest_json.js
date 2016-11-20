{
    "numFailedTests": 1,
    "numPassedTests": 29,
    "numPendingTests": 0,
    "numRuntimeErrorTestSuites": 0,
    "numTotalTestSuites": 5,
    "numTotalTests": 30,
    "startTime": 1479634620590,
    "success": false,
    "testResults": [
        {
            "message": "  ● .isCI › validates when all Travis environment vars are set and Josh K says so\n\n    expect(received).toBeFalsy()\n    \n    Expected value to be falsy, instead received\n      true\n      \n      at Object.<anonymous> (source/ci_source/_tests/_travis.test.js:12:25)\n      at process._tickCallback (internal/process/next_tick.js:103:7)\n",
            "name": "/Users/orta/dev/projects/danger/danger-js/source/ci_source/_tests/_travis.test.js",
            "summary": "",
            "status": "failed",
            "startTime": 1479634621184,
            "endTime": 1479634621434,
            "assertionResults": [
                {
                    "status": "failed",
                    "title": "validates when all Travis environment vars are set and Josh K says so",
                    "failureMessages": [
                        "Error: expect(received).toBeFalsy()\n\nExpected value to be falsy, instead received\n  true\n    at Object.<anonymous> (/Users/orta/dev/projects/danger/danger-js/source/ci_source/_tests/_travis.test.js:12:25)\n    at Object.<anonymous> (/Users/orta/dev/projects/danger/danger-js/node_modules/jest-jasmine2/build/jasmine-async.js:42:32)\n    at attemptAsync (/Users/orta/dev/projects/danger/danger-js/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:1984:24)\n    at QueueRunner.run (/Users/orta/dev/projects/danger/danger-js/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:1939:9)\n    at /Users/orta/dev/projects/danger/danger-js/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:1966:16\n    at /Users/orta/dev/projects/danger/danger-js/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:1909:9\n    at Object.fn (/Users/orta/dev/projects/danger/danger-js/node_modules/jest-jasmine2/build/jasmine-async.js:68:11)\n    at attemptAsync (/Users/orta/dev/projects/danger/danger-js/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:1984:24)\n    at QueueRunner.run (/Users/orta/dev/projects/danger/danger-js/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:1939:9)\n    at QueueRunner.execute (/Users/orta/dev/projects/danger/danger-js/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:1927:10)\n    at Spec.queueRunnerFactory (/Users/orta/dev/projects/danger/danger-js/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:718:35)\n    at Spec.execute (/Users/orta/dev/projects/danger/danger-js/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:372:10)\n    at Object.fn (/Users/orta/dev/projects/danger/danger-js/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:2584:37)\n    at attemptAsync (/Users/orta/dev/projects/danger/danger-js/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:1984:24)\n    at QueueRunner.run (/Users/orta/dev/projects/danger/danger-js/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:1939:9)\n    at QueueRunner.execute (/Users/orta/dev/projects/danger/danger-js/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:1927:10)\n    at queueRunnerFactory (/Users/orta/dev/projects/danger/danger-js/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:718:35)\n    at Object.fn (/Users/orta/dev/projects/danger/danger-js/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:2569:13)\n    at attemptAsync (/Users/orta/dev/projects/danger/danger-js/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:1984:24)\n    at QueueRunner.run (/Users/orta/dev/projects/danger/danger-js/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:1939:9)\n    at QueueRunner.execute (/Users/orta/dev/projects/danger/danger-js/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:1927:10)\n    at queueRunnerFactory (/Users/orta/dev/projects/danger/danger-js/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:718:35)\n    at TreeProcessor.execute (/Users/orta/dev/projects/danger/danger-js/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:2431:7)\n    at Env.execute (/Users/orta/dev/projects/danger/danger-js/node_modules/jest-jasmine2/vendor/jasmine-2.5.2.js:780:17)\n    at jasmine2 (/Users/orta/dev/projects/danger/danger-js/node_modules/jest-jasmine2/build/index.js:96:7)\n    at runTest (/Users/orta/dev/projects/danger/danger-js/node_modules/jest-cli/build/runTest.js:50:10)\n    at promise.then (/Users/orta/dev/projects/danger/danger-js/node_modules/jest-cli/build/TestRunner.js:304:14)\n    at process._tickCallback (internal/process/next_tick.js:103:7)"
                    ]
                },
                {
                    "status": "passed",
                    "title": "does not validate without josh",
                    "failureMessages": []
                },
                {
                    "status": "passed",
                    "title": "validates when all Travis environment vars are set and Josh K says so",
                    "failureMessages": []
                },
                {
                    "status": "passed",
                    "title": "does not validate without josh",
                    "failureMessages": []
                },
                {
                    "status": "passed",
                    "title": "does not validate when TRAVIS_PULL_REQUEST is missing",
                    "failureMessages": []
                },
                {
                    "status": "passed",
                    "title": "does not validate when TRAVIS_REPO_SLUG is missing",
                    "failureMessages": []
                },
                {
                    "status": "passed",
                    "title": "needs to have a PR number",
                    "failureMessages": []
                },
                {
                    "status": "passed",
                    "title": "pulls it out of the env",
                    "failureMessages": []
                },
                {
                    "status": "passed",
                    "title": "pulls it out of the env",
                    "failureMessages": []
                }
            ]
        },
        {
            "message": "",
            "name": "/Users/orta/dev/projects/danger/danger-js/source/runner/_tests/Executor.test.js",
            "summary": "",
            "status": "passed",
            "startTime": 1479634621503,
            "endTime": 1479634621561,
            "assertionResults": [
                {
                    "status": "passed",
                    "title": "gets diff / pr info in setup",
                    "failureMessages": []
                },
                {
                    "status": "passed",
                    "title": "gets diff / pr info in setup",
                    "failureMessages": []
                },
                {
                    "status": "passed",
                    "title": "Deletes a post when there are no messages",
                    "failureMessages": []
                },
                {
                    "status": "passed",
                    "title": "Updates or Creates comments for warnings",
                    "failureMessages": []
                }
            ]
        },
        {
            "message": "",
            "name": "/Users/orta/dev/projects/danger/danger-js/source/ci_source/_tests/_circle.test.js",
            "summary": "",
            "status": "passed",
            "startTime": 1479634621610,
            "endTime": 1479634621639,
            "assertionResults": [
                {
                    "status": "passed",
                    "title": "validates when all Circle environment vars are set",
                    "failureMessages": []
                },
                {
                    "status": "passed",
                    "title": "does not validate without josh",
                    "failureMessages": []
                },
                {
                    "status": "passed",
                    "title": "validates when all circle environment vars are set",
                    "failureMessages": []
                },
                {
                    "status": "passed",
                    "title": "does not validate outside of circle",
                    "failureMessages": []
                },
                {
                    "status": "passed",
                    "title": "does not validate when CIRCLE_CI_API_TOKEN is missing",
                    "failureMessages": []
                },
                {
                    "status": "passed",
                    "title": "does not validate when CIRCLE_PROJECT_USERNAME is missing",
                    "failureMessages": []
                },
                {
                    "status": "passed",
                    "title": "does not validate when CIRCLE_PROJECT_REPONAME is missing",
                    "failureMessages": []
                },
                {
                    "status": "passed",
                    "title": "does not validate when CIRCLE_BUILD_NUM is missing",
                    "failureMessages": []
                },
                {
                    "status": "passed",
                    "title": "needs to have a PR number",
                    "failureMessages": []
                },
                {
                    "status": "passed",
                    "title": "pulls it out of the env",
                    "failureMessages": []
                },
                {
                    "status": "passed",
                    "title": "can derive it from PR Url",
                    "failureMessages": []
                },
                {
                    "status": "passed",
                    "title": "derives it from the PR Url",
                    "failureMessages": []
                }
            ]
        },
        {
            "message": "",
            "name": "/Users/orta/dev/projects/danger/danger-js/source/platforms/_tests/GitHub.test.js",
            "summary": "",
            "status": "passed",
            "startTime": 1479634621688,
            "endTime": 1479634621705,
            "assertionResults": [
                {
                    "status": "passed",
                    "title": "sets the correct paths for pull request comments",
                    "failureMessages": []
                },
                {
                    "status": "passed",
                    "title": "sets the correct paths for getPullRequestDiff",
                    "failureMessages": []
                }
            ]
        },
        {
            "message": "",
            "name": "/Users/orta/dev/projects/danger/danger-js/source/runner/templates/_tests/github-issue-templates.test.js",
            "summary": "",
            "status": "passed",
            "startTime": 1479634621764,
            "endTime": 1479634621782,
            "assertionResults": [
                {
                    "status": "passed",
                    "title": "shows no tables for empty results",
                    "failureMessages": []
                },
                {
                    "status": "passed",
                    "title": "Shows the failing messages in a table",
                    "failureMessages": []
                },
                {
                    "status": "passed",
                    "title": "Shows the warning messages in a table",
                    "failureMessages": []
                }
            ]
        }
    ]
}