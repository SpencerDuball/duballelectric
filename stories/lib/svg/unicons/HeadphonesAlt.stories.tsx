import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { HeadphonesAlt, HeadphonesAltPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/HeadphonesAlt",
  component: HeadphonesAlt,
} as ComponentMeta<typeof HeadphonesAlt>;

const Template: ComponentStory<typeof HeadphonesAlt> = (
  args: HeadphonesAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <HeadphonesAlt {...args} />
    <HeadphonesAlt {...args} fill="red.500" />
    <HeadphonesAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
