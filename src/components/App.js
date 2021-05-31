import React, { useState, useRef } from 'react';
import todoListx from '../data';
import 'tailwindcss/tailwind.css';

export default function App(props) {
	const [todoList, updateList] = useState(todoListx);
	const bodyInput = useRef(null);

	const [toDo, updateToDo] = useState({
		title: '',
		completed: false
	});

	const handleChange = evt => {
		updateToDo({
			...toDo,
			title: evt.target.value,
			completed: false
		});
	};

	const handleSubmit = evt => {
		evt.preventDefault();
		// todoList.completed = 'false';
		// todoList.title = '';
		console.log(todoList);
		updateList([...todoList, toDo]);
	};

	return (
		<div>
			<h1 className="text-center text-green-200 text-5xl">Chris's TodoList</h1>
			<form
				onSubmit={handleSubmit}
				className="flex flex-col items-center mt-24 m-auto bg-green-300 w-64 h-32 rounded-lg text-white"
			>
				<label className="p-2 leading-5">
					What do you Need To Do? <br />
					<input
						type="text"
						onChange={handleChange}
						ref={bodyInput}
						className="mt-4 ml-2 text-black focus:border-green-200"
					/>
				</label>{' '}
				<br />
				<input
					type="submit"
					value="Add To Do"
					className="w-24 mr-2 mb-1.5 rounded-tl-lg rounded-br-lg bg-yellow-100"
				/>
			</form>

			<div className="bg-green-100 mt-28 ml-48 h-65 w-3/4 p-8 rounded-lg grid gap-5 grid-cols-4 content-around">
				{todoList.map(todo => {
					return (
						<div
							onClick={evt => {
								evt.preventDefault();
								updateList((todo.completed = true));
							}}
							style={
								todo.completed ? { display: 'none' } : { display: 'block' }
							}
							className="
							w-60 
							h-23 
							mt-30 
							bg-green-200 
							leading-7 
							rounded-lg
							shadow-sm 
							flex 
							items-center 
							text-center 
							flex-col 
							justify-items-center
							text-white
							hover:shadow-md"
						>
							<h2 className="text-xl font-bold">{todo.title}</h2> <br />
							<p>{todo.completed == false ? 'Not Completed' : 'Completed'}</p>
							<br />
						</div>
					);
				})}
			</div>
		</div>
	);
}
