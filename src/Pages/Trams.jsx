const Trams = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
      <div
        className="p-8 rounded-xl border border-[#f96c1f] bg-base-200 w-full max-w-xl text-left space-y-6"
        style={{ boxShadow: "0 8px 24px #f96c1f" }}
      >
        <h2 className="text-3xl font-bold text-[#f96c1f] text-center">
          Terms & Privacy
        </h2>

        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-[#f96c1f]">
            Privacy Policy
          </h3>
          <p className="text-gray-700">
            SkillSwap respects your privacy. We collect only essential
            information to provide our services, such as your name, email, and
            profile details.
          </p>
          <p className="text-gray-700">
            Your data is stored securely and never sold or shared with third
            parties. You can update or delete your profile anytime.
          </p>
          <p className="text-gray-700">
            For questions, contact us at{" "}
            <span className="text-[#f96c1f]">support@skillswap.io</span>.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="text-xl font-semibold text-[#f96c1f]">Terms of Use</h3>
          <p className="text-gray-700">
            By using SkillSwap, you agree to follow our community guidelines and
            respect other users. You must not misuse the platform or attempt
            unauthorized access.
          </p>
          <p className="text-gray-700">
            SkillSwap may update these terms occasionally. Continued use of the
            platform means you accept any changes.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Trams;
