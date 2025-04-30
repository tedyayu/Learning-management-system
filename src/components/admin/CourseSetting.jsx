import  { useState } from 'react';

const CourseSettings = () => {
  // State for all the toggle options
  const [settings, setSettings] = useState({
    allowMultipleLanguages: false,
    courseImageResolution: '1280x720',
    enableContentSecurity: false,
    autoEnableVideo: false,
    enableSelfEnrollment: false,
    enableWatermark: false,
    watermarkType: '',
    displayLogoWatermark: false,
    enableLearnerPurchase: false,
    enableAssignment: false,
    enableCertificate: false,
    socialMedia: {
      facebook: false,
      twitter: false,
      whatsapp: false,
      linkedin: false,
      gmail: false,
      telegram: false
    }
  });

  const handleToggle = (field) => {
    setSettings(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleSocialMediaToggle = (platform) => {
    setSettings(prev => ({
      ...prev,
      socialMedia: {
        ...prev.socialMedia,
        [platform]: !prev.socialMedia[platform]
      }
    }));
  };

  const handleWatermarkType = (type) => {
    setSettings(prev => ({
      ...prev,
      watermarkType: type
    }));
  };

  const handleResolutionChange = (e) => {
    setSettings(prev => ({
      ...prev,
      courseImageResolution: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Settings saved:', settings);
    // Add your save logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-full mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Course settings</h1>
        <p className="text-gray-600 mb-8">Manage your course settings</p>

        <form onSubmit={handleSubmit}>
          {/* Allow multiple languages */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Allow multiple languages</h2>
            <p className="text-gray-600 mb-4">Do you want to allow selection of multiple languages for the course</p>
            <label className="inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={settings.allowMultipleLanguages}
                onChange={() => handleToggle('allowMultipleLanguages')}
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-gray-700">
                {settings.allowMultipleLanguages ? 'Allowed' : 'Not Allowed'}
              </span>
            </label>
          </div>

          {/* Course image resolution */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Course image resolution</h2>
            <p className="text-gray-600 mb-4">Select the resolution in which you want the course image to be cropped</p>
            <select 
              className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={settings.courseImageResolution}
              onChange={handleResolutionChange}
            >
              <option value="1280x720">1280 x 720</option>
              <option value="1920x1080">1920 x 1080</option>
              <option value="1024x768">1024 x 768</option>
            </select>
          </div>

          {/* Enable content security */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Enable content security</h2>
            <p className="text-gray-600 mb-4">Do you want to enable content security for videos?</p>
            <label className="inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={settings.enableContentSecurity}
                onChange={() => handleToggle('enableContentSecurity')}
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-gray-700">
                {settings.enableContentSecurity ? 'Enabled' : 'Disabled'}
              </span>
            </label>
          </div>

          {/* Auto enable video after conversion */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Auto enable video after conversion</h2>
            <p className="text-gray-600 mb-4">Do you want to enable the videos right after the conversion is completed?</p>
            <label className="inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={settings.autoEnableVideo}
                onChange={() => handleToggle('autoEnableVideo')}
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-gray-700">
                {settings.autoEnableVideo ? 'Enabled' : 'Disabled'}
              </span>
            </label>
          </div>

          {/* Enable self enrollment */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Enable self enrollment</h2>
            <p className="text-gray-600 mb-4">Do you want learners to self enroll themselves into a course?</p>
            <label className="inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={settings.enableSelfEnrollment}
                onChange={() => handleToggle('enableSelfEnrollment')}
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-gray-700">
                {settings.enableSelfEnrollment ? 'Enabled' : 'Disabled'}
              </span>
            </label>
          </div>

          {/* Enable watermark */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Enable watermark</h2>
            <p className="text-gray-600 mb-4">Do you want to enable watermark on videos?</p>
            <label className="inline-flex items-center cursor-pointer mb-4">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={settings.enableWatermark}
                onChange={() => handleToggle('enableWatermark')}
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-gray-700">
                {settings.enableWatermark ? 'Enabled' : 'Disabled'}
              </span>
            </label>

            {settings.enableWatermark && (
              <div className="ml-6 space-y-4">
                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="phoneWatermark" 
                    name="watermarkType" 
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    checked={settings.watermarkType === 'phone'}
                    onChange={() => handleWatermarkType('phone')}
                  />
                  <label htmlFor="phoneWatermark" className="ml-2 block text-gray-700">
                    Display user phone number as a watermark
                  </label>
                </div>

                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="emailWatermark" 
                    name="watermarkType" 
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    checked={settings.watermarkType === 'email'}
                    onChange={() => handleWatermarkType('email')}
                  />
                  <label htmlFor="emailWatermark" className="ml-2 block text-gray-700">
                    Display user email id as a watermark
                  </label>
                </div>

                <div className="flex items-center">
                  <input 
                    type="radio" 
                    id="bothWatermark" 
                    name="watermarkType" 
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    checked={settings.watermarkType === 'both'}
                    onChange={() => handleWatermarkType('both')}
                  />
                  <label htmlFor="bothWatermark" className="ml-2 block text-gray-700">
                    Display both user phone number and email id as a watermark
                  </label>
                </div>

                <div className="mt-4">
                  <p className="text-gray-700 mb-2">Display your logo as a watermark.</p>
                  <input 
                    type="file" 
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Enable learner purchase */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Enable learner purchase</h2>
            <p className="text-gray-600 mb-4">Do you want the learners to purchase the courses/bundles?</p>
            <label className="inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={settings.enableLearnerPurchase}
                onChange={() => handleToggle('enableLearnerPurchase')}
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-gray-700">
                {settings.enableLearnerPurchase ? 'Enabled' : 'Disabled'}
              </span>
            </label>
          </div>

          {/* Enable assignment */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Enable assignment</h2>
            <p className="text-gray-600 mb-4">Do you want to show assignment?</p>
            <label className="inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={settings.enableAssignment}
                onChange={() => handleToggle('enableAssignment')}
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-gray-700">
                {settings.enableAssignment ? 'Enabled' : 'Disabled'}
              </span>
            </label>
          </div>

          {/* Enable certificate */}
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Enable certificate</h2>
            <p className="text-gray-600 mb-4">Do you want to show certificate?</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <input 
                  type="radio" 
                  id="enableCert" 
                  name="certificate" 
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  checked={settings.enableCertificate}
                  onChange={() => setSettings(prev => ({...prev, enableCertificate: true}))}
                />
                <label htmlFor="enableCert" className="ml-2 block text-gray-700">
                  Enable
                </label>
              </div>
              <div className="flex items-center">
                <input 
                  type="radio" 
                  id="disableCert" 
                  name="certificate" 
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  checked={!settings.enableCertificate}
                  onChange={() => setSettings(prev => ({...prev, enableCertificate: false}))}
                />
                <label htmlFor="disableCert" className="ml-2 block text-gray-700">
                  Disable
                </label>
              </div>
            </div>
            {settings.enableCertificate && (
              <button 
                type="button"
                className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Manage certificate
              </button>
            )}
          </div>

          {/* Enable share social media */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Enable share social media</h2>
            <p className="text-gray-600 mb-4">Do you want to show social media?</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="facebook" 
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  checked={settings.socialMedia.facebook}
                  onChange={() => handleSocialMediaToggle('facebook')}
                />
                <label htmlFor="facebook" className="ml-2 block text-gray-700">
                  Facebook
                </label>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="twitter" 
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  checked={settings.socialMedia.twitter}
                  onChange={() => handleSocialMediaToggle('twitter')}
                />
                <label htmlFor="twitter" className="ml-2 block text-gray-700">
                  Twitter
                </label>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="whatsapp" 
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  checked={settings.socialMedia.whatsapp}
                  onChange={() => handleSocialMediaToggle('whatsapp')}
                />
                <label htmlFor="whatsapp" className="ml-2 block text-gray-700">
                  Whatsapp
                </label>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="linkedin" 
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  checked={settings.socialMedia.linkedin}
                  onChange={() => handleSocialMediaToggle('linkedin')}
                />
                <label htmlFor="linkedin" className="ml-2 block text-gray-700">
                  LinkedIn
                </label>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="gmail" 
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  checked={settings.socialMedia.gmail}
                  onChange={() => handleSocialMediaToggle('gmail')}
                />
                <label htmlFor="gmail" className="ml-2 block text-gray-700">
                  Gmail
                </label>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="telegram" 
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  checked={settings.socialMedia.telegram}
                  onChange={() => handleSocialMediaToggle('telegram')}
                />
                <label htmlFor="telegram" className="ml-2 block text-gray-700">
                  Telegram
                </label>
              </div>
            </div>
          </div>

          {/* Save button */}
          <div className="mt-8">
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseSettings;