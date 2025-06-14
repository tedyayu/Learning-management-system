import { useState, useRef, useEffect } from "react";
import { Editor } from "primereact/editor";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { Chips } from "primereact/chips";
import { ProgressSpinner } from "primereact/progressspinner";
import { Toast } from "primereact/toast";
import { createLesson ,updateLesson} from "../../utils/course.api";

const CreateLesson = () => {
  const { showContentFormId } = useParams();
  const toast = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Retrieve lesson data and mode from location state
  const { lesson, mode } = location.state || {};
  const isEditMode = mode === "edit";

  // State variables
  const [lessonName, setLessonName] = useState("");
  const [lessonContent, setLessonContent] = useState("");
  const [lessonOrder, setLessonOrder] = useState(1);
  const [duration, setDuration] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [tags, setTags] = useState([]);
  const [videoTitle, setVideoTitle] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [videoDescription, setVideoDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Pre-fill form fields in Edit Mode
  useEffect(() => {
    if (isEditMode && lesson) {
      setLessonName(lesson.title || "");
      setLessonContent(lesson.content || "");
      setLessonOrder(lesson.order || 1);
      setDuration(lesson.duration || "");
      setThumbnailUrl(lesson.thumbnailUrl || "");
      setTags(lesson.tags || []);
      setVideoTitle(lesson.videoTitle || "");
      setYoutubeUrl(lesson.youtubeUrl || "");
      setVideoDescription(lesson.videoDescription || "");
    }
  }, [isEditMode, lesson]);

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    if (!lessonName.trim()) newErrors.lessonName = "Lesson name is required.";
    if (!lessonContent.trim()) newErrors.lessonContent = "Lesson content is required.";
    if (!videoTitle.trim()) newErrors.videoTitle = "Video title is required.";
    if (!youtubeUrl.trim()) newErrors.youtubeUrl = "YouTube URL is required.";
    if (lessonOrder < 1) newErrors.lessonOrder = "Order must be a positive number.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Save (Create or Update)
  const handleSaveLesson = async () => {
    if (!validateForm()) {
      toast.current.show({
        severity: "error",
        summary: "Validation Error",
        detail: "Please fill in all required fields.",
        life: 3000,
      });
      return;
    }

    setIsLoading(true);
    const newLesson = {
      name: lessonName,
      content: lessonContent,
      order: lessonOrder,
      duration,
      thumbnailUrl,
      tags,
      video: {
        title: videoTitle,
        url: youtubeUrl,
        description: videoDescription,
      },
    };

    try {
      if (isEditMode) {
        // Update existing lesson
        await updateLesson(lesson.id, newLesson);
        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "Lesson updated successfully!",
          life: 3000,
        });
      } else {
        // Create new lesson
        await createLesson(newLesson, showContentFormId);
        toast.current.show({
          severity: "success",
          summary: "Success",
          detail: "Lesson created successfully!",
          life: 3000,
        });
      }
      navigate(-1); // Navigate back to the previous page
    } catch (error) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: error.message || "Failed to save lesson.",
        life: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Cancel
  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel?")) {
      navigate(-1); // Navigate back to the previous page
    }
  };

  // Handle Image Upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnailUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6">
      <Toast ref={toast} />
      <h1 className="text-2xl font-bold text-gray-800">
        {isEditMode ? "Edit Lesson" : "Create New Lesson"}
      </h1>

      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Lesson Name<span className="text-red-500">*</span>
        </label>
        <InputText 
          value={lessonName}
          onChange={(e) => setLessonName(e.target.value)}
          className={`w-full ${errors.lessonName ? "p-invalid" : ""}`}
          placeholder="Enter lesson name"
        />
        {errors.lessonName && <small className="p-error">{errors.lessonName}</small>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Lesson Order<span className="text-red-500">*</span>
        </label>
        <InputText
          type="number"
          value={lessonOrder}
          onChange={(e) => setLessonOrder(Number(e.target.value))}
          className={`w-full ${errors.lessonOrder ? "p-invalid" : ""}`}
          placeholder="Enter lesson order"
        />
        {errors.lessonOrder && <small className="p-error">{errors.lessonOrder}</small>}
      </div>


      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">Estimated Duration</label>
        <InputText
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full"
          placeholder="e.g., 30 minutes"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Lesson Content<span className="text-red-500">*</span>
        </label>
        <Editor
          value={lessonContent}
          onTextChange={(e) => setLessonContent(e.htmlValue || "")}
          style={{ height: "300px" }}
          className={errors.lessonContent ? "p-invalid" : ""}
        />
        {errors.lessonContent && <small className="p-error">{errors.lessonContent}</small>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">Lesson Thumbnail</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        {thumbnailUrl && (
          <img
            src={thumbnailUrl}
            alt="Thumbnail Preview"
            className="mt-2 w-32 h-32 object-cover rounded"
          />
        )}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">Tags</label>
        <Chips value={tags} onChange={(e) => setTags(e.value)} className="w-full" />
      </div>

      <hr className="my-4" />

      <h2 className="text-lg font-semibold text-gray-800">Add YouTube Video</h2>

      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Video Title<span className="text-red-500">*</span>
        </label>
        <InputText
          value={videoTitle}
          onChange={(e) => setVideoTitle(e.target.value)}
          className={`w-full ${errors.videoTitle ? "p-invalid" : ""}`}
          placeholder="Enter video title"
        />
        {errors.videoTitle && <small className="p-error">{errors.videoTitle}</small>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">
          YouTube URL<span className="text-red-500">*</span>
        </label>
        <InputText
          value={youtubeUrl}
          onChange={(e) => setYoutubeUrl(e.target.value)}
          className={`w-full ${errors.youtubeUrl ? "p-invalid" : ""}`}
          placeholder="Enter YouTube URL"
        />
        {errors.youtubeUrl && <small className="p-error">{errors.youtubeUrl}</small>}
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">Video Description</label>
        <InputTextarea
          rows={3}
          value={videoDescription}
          onChange={(e) => setVideoDescription(e.target.value)}
          className="w-full"
          placeholder="Enter description..."
        />
      </div>

      <div className="flex justify-end space-x-2 pt-4">
        <Button
          label="Cancel"
          icon="pi pi-times"
          onClick={handleCancel}
          className="p-button-secondary p-button-outlined"
          disabled={isLoading}
        />
        <Button
          label={isEditMode ? "Update Lesson" : "Create Lesson"}
          icon="pi pi-check"
          onClick={handleSaveLesson}
          className="p-button-primary"
          disabled={isLoading}
          loading={isLoading}
        />
      </div>

      {isLoading && (
        <div className="flex justify-center">
          <ProgressSpinner />
        </div>
      )}
    </div>
  );
};

export default CreateLesson;