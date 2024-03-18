import { Block } from '@blocknote/core';
import '@blocknote/core/fonts/inter.css';
import { BlockNoteView, useCreateBlockNote } from '@blocknote/react';
import '@blocknote/react/style.css';
import { useState } from 'react'
import ReactJson from 'react-json-view'

import './App.css';

function App() {
	// Stores the document JSON.
	const [, setBlocks] = useState<Block[]>([]);

	// Creates a new editor instance.
	const editor = useCreateBlockNote({
		initialContent: [
			{
				type: 'paragraph',
				content: 'Welcome to this demo!'
			},
			{
				type: 'paragraph',
			},
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: 'Blocks:',
						styles: {
							bold: true
						}
					}
				],
			},
			{
				type: 'paragraph',
				content: 'Paragraph'
			},
			{
				type: 'heading',
				content: 'Heading'
			},
			{
				type: 'bulletListItem',
				content: 'Bullet List Item'
			},
			{
				type: 'numberedListItem',
				content: 'Numbered List Item'
			},
			{
				type: 'image'
			},
			{
				type: 'table',
				content: {
					type: 'tableContent',
					rows: [
						{
							cells: [
								[
									{
										type: 'text',
										text: 'Table Cell',
										styles: {}
									}
								],
								[
									{
										type: 'text',
										text: 'Table Cell',
										styles: {}
									}
								],
								[
									{
										type: 'text',
										text: 'Table Cell',
										styles: {}
									}
								]
							]
						},
						{
							cells: [
								[
									{
										type: 'text',
										text: 'Table Cell',
										styles: {}
									}
								],
								[
									{
										type: 'text',
										text: 'Table Cell',
										styles: {}
									}
								],
								[
									{
										type: 'text',
										text: 'Table Cell',
										styles: {}
									}
								]
							]
						},
						{
							cells: [
								[
									{
										type: 'text',
										text: 'Table Cell',
										styles: {}
									}
								],
								[
									{
										type: 'text',
										text: 'Table Cell',
										styles: {}
									}
								],
								[
									{
										type: 'text',
										text: 'Table Cell',
										styles: {}
									}
								]
							]
						}
					]
				}
			},
			{
				type: 'paragraph'
			},
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: 'Inline Content:',
						styles: {
							bold: true
						}
					}
				]
			},
			{
				type: 'paragraph',
				content: [
					{
						type: 'text',
						text: 'Styled Text',
						styles: {
							bold: true,
							italic: true,
							textColor: 'red',
							backgroundColor: 'blue'
						}
					},
					{
						type: 'text',
						text: ' ',
						styles: {}
					},
					{
						type: 'link',
						href: 'https://www.blocknotejs.org',
						content: 'Link'
					}
				]
			},
			{
				type: 'paragraph'
			}
		]
	});

	// Renders the editor instance and its document JSON.
	return (
		<div className='wrapper'>
			<div className='notes'>
				<BlockNoteView
					editor={editor}
					onChange={() => {
						// Saves the document JSON to state.
						setBlocks(editor.document);
					}}
				/>
			</div>
			<div className='json'>
				<ReactJson src={editor.document} />
			</div>
		</div>
	);
}

export default App
