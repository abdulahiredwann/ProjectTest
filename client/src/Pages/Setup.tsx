import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod schema for validation
const setupSchema = z
  .object({
    logo: z.instanceof(File).optional(),
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    companyName: z.string().min(1, "Company name is required"),
    companyWebsite: z.string().url("Invalid website URL").optional(),
    companySize: z.string().min(1, "Please select company size"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof setupSchema>;

function Setup() {
  const [formData, setFormData] = useState<FormData>({
    logo: undefined,
    name: "",
    email: "",
    companyName: "",
    companyWebsite: "",
    companySize: "",
    password: "",
    confirmPassword: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(setupSchema),
  });

  const handleLogoChange = (e: any) => {
    setFormData((prev) => ({ ...prev, logo: e.target.files[0] }));
    setValue("logo", e.target.files[0]);
  };

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    // Add your form submission logic here (e.g., API call)
  };

  return (
    <section className="min-h-screen bg-white dark:bg-black py-16">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Setup Your Office
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* First Section: Logo Upload */}
            <div className="text-center">
              <label
                htmlFor="logo"
                className="cursor-pointer rounded-full border-2 border-dashed border-gray-300 dark:border-gray-700 w-32 h-32 mx-auto flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
              >
                {formData.logo ? (
                  <img
                    src={URL.createObjectURL(formData.logo)}
                    alt="Logo"
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <span>Upload Logo</span>
                )}
                <input
                  type="file"
                  id="logo"
                  accept="image/*"
                  onChange={handleLogoChange}
                  className="hidden"
                />
              </label>
              {errors.logo && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.logo?.message}
                </p>
              )}
            </div>

            {/* Second Section: 4 Input Fields in Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Company Name */}
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  {...register("companyName")}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="Company Name"
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.companyName.message}
                  </p>
                )}
              </div>

              {/* Company Website */}
              <div>
                <label
                  htmlFor="companyWebsite"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
                >
                  Company Website
                </label>
                <input
                  type="url"
                  id="companyWebsite"
                  {...register("companyWebsite")}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="https://company.com"
                />
                {errors.companyWebsite && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.companyWebsite.message}
                  </p>
                )}
              </div>
            </div>

            {/* Third Section: Other Input Fields */}
            <div className="space-y-6">
              {/* Company Size */}
              <div>
                <span className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  Company Size
                </span>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="size-small"
                      value="0-10"
                      {...register("companySize")}
                      className="h-5 w-5 text-yellow-400 focus:ring-yellow-400"
                    />
                    <label
                      htmlFor="size-small"
                      className="text-sm text-gray-700 dark:text-gray-200"
                    >
                      0 to 10 employees
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id="size-other"
                      value="other"
                      {...register("companySize")}
                      className="h-5 w-5 text-yellow-400 focus:ring-yellow-400"
                    />
                    <label
                      htmlFor="size-other"
                      className="text-sm text-gray-700 dark:text-gray-200"
                    >
                      Other
                    </label>
                  </div>
                </div>
                {errors.companySize && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.companySize.message}
                  </p>
                )}
              </div>
            </div>

            {/* Password */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  {...register("password")}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="••••••••"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  {...register("confirmPassword")}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  placeholder="••••••••"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-yellow-400 text-gray-900 dark:text-white px-6 py-3 rounded-md hover:bg-yellow-500 transition font-semibold"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Setup;
