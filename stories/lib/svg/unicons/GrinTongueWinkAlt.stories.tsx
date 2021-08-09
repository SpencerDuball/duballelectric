import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { GrinTongueWinkAlt, GrinTongueWinkAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/GrinTongueWinkAlt",
  component: GrinTongueWinkAlt,
} as ComponentMeta<typeof GrinTongueWinkAlt>;

const Template: ComponentStory<typeof GrinTongueWinkAlt> = (
  args: GrinTongueWinkAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <GrinTongueWinkAlt {...args} />
    <GrinTongueWinkAlt {...args} fill="red.500" />
    <GrinTongueWinkAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
