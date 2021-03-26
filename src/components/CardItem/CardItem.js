import React from 'react';
import { ExternalLink } from 'react-external-link';
import GitHub from '@material-ui/icons/GitHub';
import Website from '@material-ui/icons/Web';
import IconButton from '@material-ui/core/IconButton';

function CardItem(props) {
	return (
		<>
			<li className='cards__item'>
				<ExternalLink className='cards__item__link' href={props.path}>
					<figure className='cards__item__pic-wrap' data-category={props.label}>
						<img src={props.src} alt='Travel Image' className='cards__item__img' />
					</figure>
					<div className='cards__item__info'>
						<h7>{props.title}</h7>
						<p className='cards__item__text'>{props.text}</p>
						{props.github ? (
							<IconButton color='primary' aria-label='add an alarm' href={props.github}>
								<GitHub />
							</IconButton>
						) : null}
						<IconButton color='secondary' aria-label='add an alarm' href={props.path}>
							<Website />
						</IconButton>
					</div>
				</ExternalLink>
			</li>
		</>
	);
}

export default CardItem;
