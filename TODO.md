# TODO: Replace #FFFFFF with #F4F6F9

## Task
Replace all #FFFFFF and near-white values (within 3-5% luminance tolerance) with #F4F6F9. Ensure consistent color rendering with no warmth added. Preserve opacity, shadows, and all non-white elements.

## Plan

### Step 1: Modify tailwind.config.ts
- [ ] Add custom "white" color that maps to #F4F6F9
- [ ] This will automatically replace all Tailwind classes (bg-white, text-white, border-white, etc.)

### Step 2: Modify index.css
- [ ] Update CSS variable --card from hsl(0 0% 100%) to new white color
- [ ] Update CSS variable --popover from hsl(0 0% 100%) to new white color

### Step 3: Verify
- [ ] Ensure rgba(255,255,255,0.03) opacity effects remain unchanged
- [ ] Verify no shadows or non-white elements are affected
