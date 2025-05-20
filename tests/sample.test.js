console.log("Test started");
if (2 + 2 === 4) {
  console.log("Test passed");
  process.exit(0);
} else {
  console.error("Test failed");
  process.exit(1);
}
