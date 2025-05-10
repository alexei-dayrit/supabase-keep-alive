# supabase-keep-alive
This repo runs a lightweight JavaScript script via GitHub Actions to periodically ping a Supabase table, keeping your free-tier Supabase project from being paused due to inactivity.

## How It Works
GitHub Actions runs the script every 6 hours (by default), sending a small query to your database. This counts as “activity” and prevents the project from being paused after 7 days of inactivity.

## Setup Instructions
Follow these steps to use this in your own Supabase project:

1. Clone this repository
```shell
git clone https://github.com/YOUR_USERNAME/supabase-keep-alive.git
cd supabase-keep-alive
```

2. Install dependencies
```shell
npm install
```

3. Update the script
  In keep-alive.js, change 'your_table' to any real table in your Supabase database:
```shell
const { data, error } = await supabase
  .from('your_table')  // <- change this
  .select('id')
  .limit(1);
```

4. Create a GitHub repository
  Create a new GitHub repo and push your code to it:
```shell
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

5. Add GitHub
In your new repo on GitHub:
	•	Go to Settings > Secrets and variables > Actions > New repository secret
	•	Add these two secrets:

| SUPABASE_URL| SUPABASE_KEY|
|----------|----------|
| Your Supabase connection | Your anon or service role key|

6. Confirm workflow
Your GitHub Action is defined in .github/workflows/keep-alive.yml and runs on a schedule.

	-	Wait for it to run automatically (every 6 days), or
	-	Go to the Actions tab and click “Run workflow” manually to test it

7. Enjoy the script!
