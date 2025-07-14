<div className="inset-0 fixed bg-black/70 flex justify-center items-center z-50">
  <div className="border border-[#d6b78f] w-2/3 max-w-2xl max-h-[80vh] mt-10 bg-[#fff7ef] rounded-xl shadow-2xl overflow-y-auto">
    
    {/* Header */}
    <div className="text-xl flex justify-between p-6 border-b-2 border-[#e5c79d] sticky top-0 bg-[#fdeada] z-10 rounded-t-xl">
      <h1 className="font-bold text-[#7a1d1d] text-2xl">
        Deactivate Your Account
      </h1>
      <button
        onClick={onClose}
        className="hover:scale-110 transition-transform"
      >
        <IoIosCloseCircle className="text-3xl text-[#c04a3c] hover:text-[#a03027]" />
      </button>
    </div>

    {/* Body */}
    <div className="p-6 space-y-6 text-[#5e2c04]">
      {/* Warning Message */}
      <div className="bg-[#fff2f0] border-l-4 border-[#c04a3c] p-4 rounded-r-lg">
        <div className="ml-1">
          <h3 className="text-lg font-semibold text-[#7a1d1d]">
            Account Deactivation Warning
          </h3>
          <p className="mt-2 text-sm text-[#7a1d1d]">
            Deactivating your account will temporarily disable your access to our services.
            You can reactivate it later by logging in again. However, some data may be lost permanently.
          </p>
        </div>
      </div>

      {/* Deactivation Form */}
      <form onSubmit={handleDeactivateAccount} className="space-y-6">
        {/* Reason */}
        <div>
          <label className="block text-sm font-semibold text-[#a3542d] mb-2">
            Why are you deactivating your account? *
          </label>
          <select
            name="reason"
            value={deactivationData.reason}
            onChange={handleInputChange}
            required
            className="w-full p-3 border border-[#d6b78f] rounded-lg bg-white focus:ring-2 focus:ring-[#a3542d] focus:border-[#a3542d]"
          >
            <option value="">Select a reason</option>
            <option value="not-using">I'm not using the service anymore</option>
            <option value="privacy-concerns">Privacy concerns</option>
            <option value="found-alternative">Found a better alternative</option>
            <option value="too-expensive">Too expensive</option>
            <option value="technical-issues">Technical issues</option>
            <option value="temporary-break">Taking a temporary break</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Feedback */}
        <div>
          <label className="block text-sm font-semibold text-[#a3542d] mb-2">
            Additional feedback (optional)
          </label>
          <textarea
            name="feedback"
            value={deactivationData.feedback}
            onChange={handleInputChange}
            placeholder="Help us improve by sharing your experience..."
            rows="4"
            className="w-full p-3 border border-[#d6b78f] rounded-lg bg-white focus:ring-2 focus:ring-[#a3542d] focus:border-[#a3542d] resize-none"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-semibold text-[#a3542d] mb-2">
            Confirm your password *
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={deactivationData.confirmPassword}
            onChange={handleInputChange}
            placeholder="Enter your current password"
            required
            className="w-full p-3 border border-[#d6b78f] rounded-lg bg-white focus:ring-2 focus:ring-[#a3542d] focus:border-[#a3542d]"
          />
        </div>

        {/* Final Confirmation */}
        <div className="bg-[#fdeada] p-4 rounded-lg">
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              name="confirmDeactivation"
              checked={deactivationData.confirmDeactivation}
              onChange={handleInputChange}
              className="mt-1 h-4 w-4 text-[#a3542d] focus:ring-[#a3542d] border-[#d6b78f] rounded"
            />
            <span className="text-sm text-[#5e2c04]">
              I understand that deactivating my account will temporarily disable access to all services.
              I confirm that I want to proceed with account deactivation.
            </span>
          </label>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-6 py-3 border-2 border-[#d6b78f] text-[#5e2c04] rounded-lg hover:bg-[#f5e3cd] transition-colors font-medium"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading || !deactivationData.confirmDeactivation}
            className="flex-1 px-6 py-3 bg-[#c04a3c] text-white rounded-lg hover:bg-[#a03027] disabled:bg-[#d6b78f] disabled:cursor-not-allowed transition-colors font-semibold flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Deactivating...
              </>
            ) : (
              "Deactivate Account"
            )}
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
