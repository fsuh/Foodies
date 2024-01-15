"use client";
import styles from "@/app/components/styles/image-picker.module.css";
import Image from "next/image";
import { useRef, useState } from "react";
const ImagePicker = ({ label, name }) => {
	const [pickedImage, setPickedImage] = useState();
	const imageInput = useRef();
	const handlePickImage = () => {
		imageInput.current.click();
	};
	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (!file) {
			setPickedImage(null);
			return;
		}
		const fileReader = new FileReader();
		fileReader.onload = () => {
			fileReader.result && setPickedImage(fileReader.result);
		};
		fileReader.readAsDataURL(file);
	};
	return (
		<div className={styles.picker}>
			<label htmlFor={name}>{label}</label>
			<div className={styles.controls}>
				<div className={styles.preview}>
					{!pickedImage && <p>No image picked</p>}
					{pickedImage && (
						<Image
							src={pickedImage}
							alt="Image you (user) selected"
							fill
						/>
					)}
				</div>
				<input
					className={styles.input}
					type="file"
					id={name}
					accept="image/png, image/jpeg"
					name={name}
					ref={imageInput}
					onChange={handleImageChange}
					required
				/>
				<button
					className={styles.button}
					type="button"
					onClick={handlePickImage}
				>
					Pick an Image
				</button>
			</div>
		</div>
	);
};
export default ImagePicker;
