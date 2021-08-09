import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { FileEditAlt, FileEditAltPropsI } from "lib/svg/unicons";

export default {
  title: "lib/svg/unicons/FileEditAlt",
  component: FileEditAlt,
} as ComponentMeta<typeof FileEditAlt>;

const Template: ComponentStory<typeof FileEditAlt> = (
  args: FileEditAltPropsI
) => (
  <x.div display="flex" gap="20px">
    <FileEditAlt {...args} />
    <FileEditAlt {...args} fill="red.500" />
    <FileEditAlt {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
