// Debug script to check what's causing the dev server error
const { spawn } = require('child_process');

console.log('🔍 Starting debug check for npm run dev...\n');

const devProcess = spawn('npm', ['run', 'dev'], {
  stdio: 'pipe',
  shell: true
});

let output = '';
let errorOutput = '';

devProcess.stdout.on('data', (data) => {
  const text = data.toString();
  output += text;
  console.log('STDOUT:', text);
});

devProcess.stderr.on('data', (data) => {
  const text = data.toString();
  errorOutput += text;
  console.log('STDERR:', text);
});

devProcess.on('close', (code) => {
  console.log(`\n📊 Process exited with code: ${code}`);
  if (code !== 0) {
    console.log('\n❌ Error detected!');
    console.log('Error output:', errorOutput);
  }
});

// Kill after 10 seconds to prevent hanging
setTimeout(() => {
  devProcess.kill();
  console.log('\n⏰ Process killed after 10 seconds');
}, 10000);