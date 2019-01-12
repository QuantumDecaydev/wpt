// META: global=!default,worker

// See
// https://web-platform-tests.org/writing-tests/testharness.html#multi-global-tests
// for how to specify in which global scopes to run this tests,
// how to specify additional scripts needed, etc.

// ============================================================================

// Test body.
// .any.js tests are always testharness.js-based.
test(() => {
    assert_equals(1, 1, "1 == 1");
  },
  "Test that should pass"
);

test(() => {
    // This file is "general.any.js" but the worker top-level script is
    // "general.any.worker.js", which is generated by the WPT server.
    assert_equals(location.pathname, "/workers/examples/general.any.worker.js");
  },
  "Worker top-level script is a generated script."
);
