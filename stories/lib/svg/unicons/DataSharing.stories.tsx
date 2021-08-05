import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { x } from "@xstyled/emotion";

import { DataSharing, DataSharingPropsI } from "lib/svg";

export default {
  title: "lib/svg/unicons/DataSharing",
  component: DataSharing,
} as ComponentMeta<typeof DataSharing>;

const Template: ComponentStory<typeof DataSharing> = (
  args: DataSharingPropsI
) => (
  <x.div display="flex" gap="20px">
    <DataSharing {...args} />
    <DataSharing {...args} fill="red.500" />
    <DataSharing {...args} fill="gray.900" />
  </x.div>
);

export const Primary = Template.bind({});
Primary.args = { w: "50px", h: "50px", fill: "gray.200" };
