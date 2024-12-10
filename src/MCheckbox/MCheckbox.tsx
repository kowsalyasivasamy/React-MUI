import {Checkbox, FormControl, FormControlLabel} from '@mui/material';
import {pink} from "@mui/material/colors"
import {FavoriteBorder, Favorite, BookmarkBorder, Bookmark} from "@mui/icons-material";

const MCheckbox = () => {
    return (
        <>
            <Checkbox defaultChecked/>
            <Checkbox />
            <Checkbox disabled/>
            <Checkbox checked/>

            {/* Using form control */}
            <div>
                <FormControl>
                    <FormControlLabel control={<Checkbox defaultChecked/>} label="Student"/>
                    <FormControlLabel control={<Checkbox />} label="Staff" />
                </FormControl>
            </div>

            {/* Size */}
            <div>
                <Checkbox size="small" checked/>
                <Checkbox checked/>
                <Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
            </div>

            {/* color */}
            <div>
                <Checkbox defaultChecked color="secondary"/>
                <Checkbox defaultChecked color="success"/>
                <Checkbox defaultChecked color="default"/>
                <Checkbox defaultChecked sx={{
                    color: pink[800],
                    '&.Mui-checked': {
                        color: pink[600],
                    },
                }} />
            </div>

            {/* Icon */}
            <Checkbox icon={<FavoriteBorder />}  checkedIcon={<Favorite />}/>
            <Checkbox icon={<BookmarkBorder />}  checkedIcon={<Bookmark />}/>
        </>
    )
}

export default MCheckbox;