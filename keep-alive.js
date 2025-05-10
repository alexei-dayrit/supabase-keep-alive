const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

const keepAlive = async () => {
  try {
    const { data, error } = await supabase
      .from("users") // replace with a real table
      .select("id")
      .limit(1);

    if (error) {
      console.error("Error:", error);
    } else {
      console.log("Ping successful:", data);
    }
  } catch (err) {
    console.error("Unexpected error:", err);
  }
};

keepAlive();
